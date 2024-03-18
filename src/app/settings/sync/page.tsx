'use client';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import DeviceCard from '@/app/settings/sync/DeviceCard';
import PageTitle from '@/components/PageTitle';

import WebRTC from './WebRTC';

export default memo(() => {
  const { t } = useTranslation('setting');
  return (
    <>
      <PageTitle title={t('tab.sync')} />
      <DeviceCard />
      <WebRTC />
    </>
  );
});
