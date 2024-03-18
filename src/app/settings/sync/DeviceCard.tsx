import { createStyles } from 'antd-style';
import { rgba } from 'polished';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { MAX_WIDTH } from '@/const/layoutTokens';
import { browserInfo } from '@/utils/platform';

const useStyles = createStyles(({ css, cx, token, stylish }) => ({
  container: cx(// stylish.gradientAnimation,
  css`
    border-radius: ${token.borderRadiusLG}px;
  `),
  content: cx(
    stylish.blurStrong,
    css`
      z-index: 10;
      background: ${rgba(token.colorBgContainer, 1)};
      border-radius: ${token.borderRadiusLG - 1}px;
    `,
  ),
  glow: cx(
    stylish.gradientAnimation,
    css`
      opacity: 0.4;
    `,
  ),
}));

const DeviceCard = memo(() => {
  const { styles } = useStyles();

  return (
    <Flexbox
      className={styles.container}
      padding={1}
      style={{ maxWidth: MAX_WIDTH, position: 'relative' }}
      width={'100%'}
    >
      <Flexbox className={styles.content} flex={1} padding={12}>
        {Object.entries(browserInfo).map(([key, value]) => (
          <Flexbox distribution={'space-between'} flex={1} horizontal key={key}>
            <div>{key}</div>
            <div>{value}</div>
          </Flexbox>
        ))}
      </Flexbox>
      <Flexbox
        className={styles.glow}
        height={'100%'}
        style={{ left: 0, position: 'absolute', top: 0 }}
        width={'100%'}
      ></Flexbox>
    </Flexbox>
  );
});
export default DeviceCard;
