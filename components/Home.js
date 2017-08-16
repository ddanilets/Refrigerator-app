import React from 'react';
import PropTypes from 'prop-types';
import { View, Button }from 'react-native';

class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View>
      <Button
        title="Add a product"
        onPress={() => navigate('Product')}
      />
      <Button title="Show products table" onPress={() => navigate('Table')} />
    </View>

    );
  }
}

export default Home;