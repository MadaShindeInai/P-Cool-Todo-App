type ThemeTypes = {
  colors: {
    DANGER: string;
    MAIN: string;
    TEXT: string;
    BORDER: string;
    SHADOW: string;
    SUCCESS: string;
    INFO: string;
    WHITE: string;
  };
  fonts: {
    title: {
      fontFamily: string;
      fontSize: number;
      fontWeight: 'bold';
      fontStyle: 'italic' | 'normal' | undefined;
      textAlign: 'center';
    };
    light: {
      fontFamily: string;
      fontSize: number;
      fontStyle: 'italic' | 'normal' | undefined;
      textAlign: 'center';
    };
    regular: {
      fontFamily: string;
      fontSize: number;
      fontWeight: 'normal';
      fontStyle: 'italic' | 'normal' | undefined;
      textAlign: 'center';
    };
    bold: {
      fontFamily: string;
      fontSize: number;
      fontWeight: 'bold';
      fontStyle: 'italic' | 'normal' | undefined;
      textAlign: 'center';
    };
  };
};

const THEME: ThemeTypes = {
  colors: {
    DANGER: '#bb2124',
    MAIN: '#7fffd4',
    TEXT: '#3D5ABC',
    BORDER: '#87ceeb',
    SHADOW: '#000000',
    SUCCESS: '#22bb33',
    INFO: '#5bc0de',
    WHITE: '#FFFFFF',
  },
  fonts: {
    title: {
      fontFamily: 'PermanentMarker-Regular',
      fontSize: 24,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    light: {
      fontFamily: 'Kalam-Light',
      fontSize: 18,
      fontStyle: 'italic',
      textAlign: 'center',
    },
    regular: {
      fontFamily: 'Kalam-Regular',
      fontSize: 24,
      fontWeight: 'normal',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    bold: {
      fontFamily: 'Kalam-Bold',
      fontSize: 32,
      fontWeight: 'bold',
      fontStyle: 'normal',
      textAlign: 'center',
    },
  },
};
export default THEME;
