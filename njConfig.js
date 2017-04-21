import { registerComponent } from 'nornj';
import 'nornj-react/native';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { Provider } from 'react-redux';

registerComponent({
  Text,
  View,
  TouchableHighlight,
  Provider
});