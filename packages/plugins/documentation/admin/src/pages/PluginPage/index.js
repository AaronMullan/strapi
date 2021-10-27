/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import {
  CheckPermissions,
  ConfirmDialog,
  LoadingIndicatorPage,
  stopPropagation,
  EmptyStateLayout,
  useFocusWhenNavigate,
} from '@strapi/helper-plugin';
import { Button } from '@strapi/parts/Button';
import { Layout, HeaderLayout, ContentLayout } from '@strapi/parts/Layout';
import { Main } from '@strapi/parts/Main';
import { IconButton } from '@strapi/parts/IconButton';
import { Text, TableLabel } from '@strapi/parts/Text';
import { Flex } from '@strapi/parts/Flex';
import { Table, Tr, Thead, Th, Tbody, Td } from '@strapi/parts/Table';

import DeleteIcon from '@strapi/icons/DeleteIcon';
import Show from '@strapi/icons/Show';
import Reload from '@strapi/icons/Reload';

import permissions from '../../permissions';
import { getTrad } from '../../utils';
import openWithNewTab from '../../utils/openWithNewTab';
import useReactQuery from '../utils/useReactQuery';

const PluginPage = () => {
  useFocusWhenNavigate();
  const { formatMessage } = useIntl();
  const { data, isLoading, deleteMutation, regenerateDocMutation } = useReactQuery();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isConfirmButtonLoading, setIsConfirmButtonLoading] = useState(false);
  const [versionToDelete, setVersionToDelete] = useState();

  const colCount = 4;
  const rowCount = (data?.docVersions?.length || 0) + 1;

  const openDocVersion = () => {
    const slash = data?.prefix.startsWith('/') ? '' : '/';
    openWithNewTab(`${slash}${data?.prefix}/v${data?.currentVersion}`);
  };

  const handleRegenerateDoc = version => {
    regenerateDocMutation.mutate({ version, prefix: data?.prefix });
  };

  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };

  const handleConfirmDelete = async () => {
    setIsConfirmButtonLoading(true);
    await deleteMutation.mutateAsync({ prefix: data?.prefix, version: versionToDelete });
    setShowConfirmDelete(!showConfirmDelete);
    setIsConfirmButtonLoading(false);
  };

  const handleClickDelete = version => {
    setVersionToDelete(version);
    setShowConfirmDelete(!showConfirmDelete);
  };

  return (
    <Layout>
      <Main>
        <HeaderLayout
          title={formatMessage({
            id: getTrad('plugin.name'),
            defaultMessage: 'Documentation',
          })}
          subtitle={formatMessage({
            id: getTrad('pages.PluginPage.header.description'),
            defaultMessage: 'Configure the documentation plugin',
          })}
          primaryAction={
            //  eslint-disable-next-line
            <CheckPermissions permissions={permissions.open}>
              <Button onClick={openDocVersion} startIcon={<Show />}>
                {formatMessage({
                  id: getTrad('pages.PluginPage.Button.open'),
                  defaultMessage: 'Open Documentation',
                })}
              </Button>
            </CheckPermissions>
          }
        />
        <ContentLayout>
          {isLoading && <LoadingIndicatorPage>Plugin is loading</LoadingIndicatorPage>}
          {data?.docVersions.length ? (
            <Table colCount={colCount} rowCount={rowCount}>
              <Thead>
                <Tr>
                  <Th>
                    <TableLabel textColor="neutral600">
                      {formatMessage({
                        id: getTrad('pages.PluginPage.table.version'),
                        defaultMessage: 'Version',
                      })}
                    </TableLabel>
                  </Th>
                  <Th>
                    <TableLabel textColor="neutral600">
                      {formatMessage({
                        id: getTrad('pages.PluginPage.table.generated'),
                        defaultMessage: 'Last Generated',
                      })}
                    </TableLabel>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.docVersions
                  .sort((a, b) => (a.generatedDate < b.generatedDate ? 1 : -1))
                  .map(doc => (
                    <Tr key={doc.version}>
                      <Td width="50%">
                        <Text>{doc.version}</Text>
                      </Td>
                      <Td width="50%">
                        <Text>{doc.generatedDate}</Text>
                      </Td>
                      <Td>
                        <Flex justifyContent="end" {...stopPropagation}>
                          <IconButton
                            onClick={openDocVersion}
                            noBorder
                            icon={<Show />}
                            label={formatMessage(
                              {
                                id: getTrad('pages.PluginPage.table.icon.show'),
                                defaultMessage: 'Open {target}',
                              },
                              { target: `${doc.version}` }
                            )}
                          />
                          <CheckPermissions permissions={permissions.regenerate}>
                            <IconButton
                              onClick={() => handleRegenerateDoc(doc.version)}
                              noBorder
                              icon={<Reload />}
                              label={formatMessage(
                                {
                                  id: getTrad('pages.PluginPage.table.icon.regenerate'),
                                  defaultMessage: 'Regnerate {target}',
                                },
                                { target: `${doc.version}` }
                              )}
                            />
                          </CheckPermissions>
                          <CheckPermissions permissions={permissions.update}>
                            {doc.version !== data.currentVersion && (
                              <IconButton
                                onClick={() => handleClickDelete(doc.version)}
                                noBorder
                                icon={<DeleteIcon />}
                                label={formatMessage(
                                  {
                                    id: getTrad('pages.PluginPage.table.icon.delete'),
                                    defaultMessage: 'Delete {target}',
                                  },
                                  { target: `${doc.version}` }
                                )}
                              />
                            )}
                          </CheckPermissions>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          ) : (
            <EmptyStateLayout />
          )}
        </ContentLayout>
        <ConfirmDialog
          isConfirmButtonLoading={isConfirmButtonLoading}
          onConfirm={handleConfirmDelete}
          onToggleDialog={handleShowConfirmDelete}
          isOpen={showConfirmDelete}
        />
      </Main>
    </Layout>
  );
};

export default PluginPage;