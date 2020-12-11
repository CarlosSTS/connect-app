import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({

  itemsContainer: {
    flexDirection: 'row',
    padding: 20
  },

  item: {
    shadowColor: '#fff',
    elevation:8,
    backgroundColor: '#0c9',
    borderWidth: 2,
    borderColor: '#fff',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,

    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },

  itemTitle: {
    color:'#fff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: "bold"
  },

  itemUser: {
    paddingTop: 10,
    color:'#000',
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;