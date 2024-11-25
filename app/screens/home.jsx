import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import logo from "./../../assets/images/logo.png";
import logo2 from "./../../assets/images/logo2.png";
import MiniCard from "../../components/MiniCard";
import Clientas from "./../../assets/icons/group.svg";
import Agregar from "./../../assets/icons/anadir.svg";
import Agendas from "./../../assets/icons/calendario.svg";
import Galeria from "./../../assets/icons/fotos.svg";
import { useNavigation } from "expo-router";
import DashboardScreen from "./DashboardScreen";
import CardTurnos from "../../components/CardTurnos";

const Home = ()=> {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Image source={logo2} style={{ width: 200, height: 30 }} />
        <Image source={logo} style={{ width: 50, height: 50 }} />
      </View>
      <Card />
      <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
          >       
         <MiniCard
          title={"Clientas"}
          icon={<Clientas color={"white"} width={30} height={30} />}
          onPress={() => navigation.navigate('Clientas')}
        />
        <MiniCard
          title={"Añadir"}
          icon={<Agregar color={"white"} width={30} height={30} />}
          onPress={() => navigation.navigate('ClienteFrom')}
        />
        <MiniCard
          title={"Agendas"}
          icon={<Agendas color={"white"} width={30} height={30} />}
          onPress={() => navigation.navigate('Calendar')}
        />
        <MiniCard
          title={"Galeria"}
          icon={<Galeria color={"white"} width={30} height={30} />}
          onPress={() => navigation.navigate('Gallery')}
        />
      </ScrollView>
      <CardTurnos />
      <DashboardScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#ffe3f2",
    paddingHorizontal: 20,
  }
});

export default Home