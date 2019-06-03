import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


export default class ClassroomListScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: (new Map(): Map<string, boolean>)
    };
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return {selected};
    });
  };

  _renderItem({item, index}) {
    return (
      <TouchableOpacity underlayColor="rgba(0, 0, 0, 0.2)">
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.small}>Curso</Text>
            <Text style={styles.bold}>{item.name}</Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.small}>estudiantes</Text>
            <Text style={styles.studentsValue}>{item.students}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const data = [
      {id: 'a', students: 12, name: 'Kinder'},
      {id: 'b', students: 12, name: 'Primero'},
    ];

    return (
      <View style={styles.container}>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Apoderado</Text>
          </View>
          <FlatList
            data={data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
  },

  studentsValue: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },

  card: {
    margin: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#ccc',
  },

  cardHeader: {
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderColor: '#d9d9d9',
    padding: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bold: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },

  small: {
    marginTop: 5,
    fontSize: 14,
  },
});
