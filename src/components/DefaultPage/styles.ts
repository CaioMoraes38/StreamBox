import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: 'black',
  },
  header: {
    height: 200,
    overflow: 'hidden',
    borderRadius:15,
    
  },
  content: {
    flex: 1,
    padding:1,
    overflow: 'hidden',
    borderRadius:15,
    marginTop: 10,
    
  },
});
export default styles;