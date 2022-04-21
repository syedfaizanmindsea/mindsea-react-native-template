import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useTranslate } from 'src/i18n/useTranslate';
import { RouteParams } from 'src/navigation/routeParams';
import { COLORS } from 'src/themes/colors';
import { PlusIcon } from 'src/themes/icons';

type WelcomeScreenProps = NativeStackScreenProps<RouteParams, 'Welcome'>;

export const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslate();
  return (
    <View>
      <Text>{t('welcome_title')}</Text>
      <Pressable onPress={() => navigation.navigate('Second')}>
        <PlusIcon fill={COLORS.black} width={40} height={40} />
      </Pressable>
    </View>
  );
};
