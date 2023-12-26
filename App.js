import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PP = () => {
  return (
    <View>
      <Image source={{ uri: 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t1.15752-9/375026215_686032296894001_6198368656869101493_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHAIgX7_dOmL38deWEZADna-uaalGc3b-L65pqUZzdv4lnK-6xFOS_MWb0QbKFTA_hPs8NyfQ76Oqbi4SU9rG2L&_nc_ohc=9r918WdHnBYAX8tpaKq&_nc_ht=scontent.fmnl30-1.fna&oh=03_AdT5ieqIH_uYBuunpM26xXAnEWdJjgzN8LWieU7Z0Ym3Jw&oe=651E7ED4' }} style={styles.pp} />
    </View>
  )
};
const Profile = () => {
  const fname = 'Jaqueline'
  const lname = 'Villorejo'
  return (
    <View>
      <Text style={styles.profile}>{fname} {lname}</Text>
    </View>
  )
};
const Course = props => {
  return (
    <View>
      <Text style={styles.course}>{props.like}</Text>
    </View>
  )
};
const Subject = props => {
  return (
    <View>
      <Text style={styles.sub}>{props.subcode}</Text>
    </View>
  )
};
const SubjectDesc = props => {
  return (
    <View>
      <Text style={styles.subdesc}>{props.subdesc}</Text>
    </View>
  )
};
const Units = props => {
  return (
    <View>
      <Text style={styles.units}>Units: {props.units}</Text>
    </View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.head}>
        <PP />
        <Profile />
        <Course like="BS INFORMATION TECHNOLOGY" />
      </View>

      <Text style={styles.subtitle}>My Subjects</Text>

      <View style={styles.sublist}>
        <Subject subcode='ELEC 2' />
        <View>
          <SubjectDesc subdesc='Web Development/Web Enterprise' />
          <Units units='3' />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode='ELEC 3' />
        <View>
          <SubjectDesc subdesc='Mobile Application' />
          <Units units='3' />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode='IT 311' />
        <View>
          <SubjectDesc subdesc='Software Engineering' />
          <Units units='3' />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode='IT 312' />
        <View>
          <SubjectDesc subdesc='Web Development/Web Enterprise' />
          <Units units='3' />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode='IT 313' />
        <View>
          <SubjectDesc subdesc='Quantitative Methods' />
          <Units units='3' />
        </View>
      </View>
      <Text style={styles.clickhere}>Click here to see more</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  head: {
    backgroundColor: '#CD6A97',
    alignItems: 'left',
    justifyContent: 'center',
    height: 260,
    width: 350,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 40,
    marginBottom: 30,
  },
  pp: {
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profile: {
    color: '#ECEECD',
    fontSize: 30,
    marginLeft: 20
  },
  course: {
    color: '#ECEECD',
    marginLeft: 20,
  },

  subtitle: {
    marginRight: 248,
    fontSize: 20,
    marginBottom: 5,
    color: '#95328F'
  },
  sublist: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 350,
    backgroundColor: '#95328F',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 8,
    marginTop: 8,
    color: '#36122D'
  },

  sub: {
    fontSize: 22,
    padding: 5,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#ECEECD'
  },
  subdesc: {
    marginLeft: 30,
    color: '#ECEECD'
  },
  units: {
    marginLeft: 30,
    color: '#ECEECD'
  },
  clickhere: {
    marginTop: 15,
    marginLeft: 180,
    fontSize: 16,
    marginBottom: 40,
    color: '#95328F'
  }
});