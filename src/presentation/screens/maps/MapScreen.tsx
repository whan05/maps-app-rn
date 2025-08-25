import { StyleSheet, View } from "react-native"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Map } from "../../components/maps/Map";
import { useLocationStore } from "../../store/location/useLocationStore";
import { LoadingScreen } from "../loading/LoadingScreen";
import { useEffect } from "react";

//!!! NO HACER
// getCurrentLocation().then( (location) => {
//   console.log(location)
// })

export const MapScreen = () => {

  const { lastKnownLocation, getLocation } = useLocationStore()

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation()
    }
  }, [])
  

  if ( lastKnownLocation === null ) {
    return (
      <LoadingScreen/>
    )
  }

  return (
    <View style={styles.container}>
      <Map initialLocation={ lastKnownLocation }/>
   </View>
  )
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
