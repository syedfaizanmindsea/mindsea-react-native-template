import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { useTranslate } from 'src/i18n/useTranslate';
import { COLORS } from 'src/themes/colors';
import { PlusIcon } from 'src/themes/icons';

export const WelcomeScreen: FC = () => {
  const { t } = useTranslate();
  return (
    <View>
      <Text>{t('welcome_title')}</Text>
      <PlusIcon fill={COLORS.black} width={40} height={40} />
    </View>
  );
};
