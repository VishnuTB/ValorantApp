import { StyleSheet } from 'react-native';

export const corner = {
  small: 5,
  medium: 10,
  large: 15,
  xLarge: 20
};

export const spacing = {
  small: 2,
  medium: 4,
  large: 8,
  xLarge: 16,
};

export const viewStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fill: {
    height: '100%',
    width: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const imageStyles = StyleSheet.create({
  iconXSmall: {
    height: 20,
    width: 20,
  },
  iconSmall: {
    height: 30,
    width: 30,
  },
  iconMedium: {
    height: 40,
    width: 40,
  },
});

export const textSizes = {
  xSmall: 12,
  small: 16,
  medium: 18,
  large: 21,
  xLarge: 25,
  xxLarge: 30,
};

export const textStyles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
  xSmall: {
    fontSize: textSizes.xSmall,
  },
  text: {
    fontSize: textSizes.small,
  },
  title: {
    fontSize: textSizes.large,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: textSizes.medium,
    fontWeight: 'bold',
  },
});

export const cardStyles = StyleSheet.create({
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
