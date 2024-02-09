import { FONT, COLORS } from '../constants/themes';
import { Text } from 'react-native-elements';

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: FONT.spaceMono, color: COLORS.tertiary}]} />;
}
