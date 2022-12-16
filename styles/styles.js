import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  title: {
    color: '#300D6E',
    flex: 1,
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    
  },
  author: {
    color: 'black',

    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    marginTop: 30,
    backgroundColor: '#9D85C7',
    flexDirection: 'row'
  },
  footer: {
    marginTop: 30,
    backgroundColor: '#9D85C7',
    flexDirection: 'row'
  },
  gameboard: {
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex: {
    flexDirection: "row",
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    margin: 30,
    padding: 10,
    backgroundColor: "#67AFCB",
    width: 150,
    borderRadius: 25,
    justifyContent: 'center',
    
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5,
    fontSize: 18,
  },
  total: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },
  buttonText: {
    color:"black",
    fontSize: 20
  },
    
});