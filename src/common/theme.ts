import { createTheme } from '@rneui/themed';
import colours, { darkTheme, liteTheme } from './colours';
import { cardStyles, corner, imageStyles } from './styles';

export const noHeader = {
  headerShown: false,
};

export const AppTheme = createTheme({
  mode: 'dark',
  lightColors: {
    primary: liteTheme.primary, // widgets
    secondary: liteTheme.secondary, // text
    disabled: colours.blackAlpha1,
    background: liteTheme.background,
    // white: 'red',
    // black: liteTheme.textColor, // text input
    divider: liteTheme.border,
  },
  darkColors: {
    primary: darkTheme.primary,
    secondary: darkTheme.secondary,
    disabled: colours.blackAlpha1,
    background: darkTheme.background,
    // white: 'blue',
    // black: darkTheme.textColor,
    divider: darkTheme.border,
  },
  components: {
    Button: {
      radius: 5,
      raised: true,
      style: {
      },
      buttonStyle: {
        // backgroundColor: colours.black,
      },
      titleStyle: {
      },
      containerStyle: {
        marginHorizontal: 10,
      },
      loadingStyle: {
      }
    },
    Input: {
      inputStyle: {
        color: colours.black,
        fontSize: 15
      },
      labelStyle: {
        fontSize: 12,
        fontWeight: 'normal',
        marginBottom: 3
      },
      inputContainerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colours.white,
        ...cardStyles.large,
      },
      leftIconContainerStyle: {
        ...imageStyles.iconMedium
      },
      rightIconContainerStyle: {
        ...imageStyles.iconMedium
      },
    },
    Card: {
      containerStyle: {
        borderRadius: corner.medium
      }
    },
    BottomSheet: {
      containerStyle: {
        backgroundColor: colours.transparent,
      },
      backdropStyle: {
        backgroundColor: colours.transparent,
      }
    },
    Text: {
      h1Style: {
        color: 'red'
      },
      h2Style: {
        color: 'yellow'
      }
    }
  },
});
