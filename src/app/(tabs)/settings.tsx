import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import AnimatedHeader from "@/src/components/AnimatedHeader";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { colors } from "@/src/styles/colors";
import { globalStyles } from "@/src/styles/globalStyles";

export default function SettingsScreen() {
    const router = useRouter();
    const scrollY = useSharedValue(0);

    const handleScroll = (event) => {
        scrollY.value = withTiming(event.nativeEvent.contentOffset.y, { duration: 200 });
    };

    return (
        <View style={{ flex: 1 }}>
            {/* <AnimatedHeader scrollY={scrollY} title="Ajustes" /> */}
            <View style={globalStyles.container}>

                {/* Header con imagen y nombre */}
                <View style={styles.header}>
                    <Image source={{ uri: "https://i.pravatar.cc/100" }} style={styles.avatar} />
                    <View>
                        <Text style={styles.name}>Peter Parker</Text>
                        <Text style={styles.subtitle}>SpiderWeb Inc.</Text>
                    </View>
                </View>

                {/* Opciones de configuración */}
                <TouchableOpacity style={styles.settingItem} onPress={() => router.push("../settings/edit-name")}>
                    <View style={styles.settingLeft}>
                        <Ionicons style={styles.settingIcon} name="person-outline" size={24} color="black" />
                        <View>
                            <Text style={styles.settingLabel}>Nombre</Text>
                            <Text style={styles.settingDescription}>Editar nombre y perfil</Text>
                        </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} onPress={() => router.push("/settings/language")}>
                    <View style={styles.settingLeft}>
                        <Ionicons style={styles.settingIcon} name="globe-outline" size={24} color="black" />
                        <View>
                            <Text style={styles.settingLabel}>Idioma</Text>
                            <Text style={styles.settingDescription}>Selecciona tu idioma preferido</Text>
                        </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} onPress={() => router.push("/settings/appearance")}>
                    <View style={styles.settingLeft}>
                        <Ionicons style={styles.settingIcon} name="contrast-outline" size={24} color="black" />
                        <View>
                            <Text style={styles.settingLabel}>Apariencia</Text>
                            <Text style={styles.settingDescription}>Tema claro u oscuro</Text>
                        </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: colors.background,
        paddingTop: 40
    },

    // Estilo del header
    header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
    name: { fontSize: 20, fontWeight: "bold", color: colors.text },
    subtitle: { fontSize: 14, color: colors.text, marginTop: 2 },

    // Estilo de cada opción del menú
    settingItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },

    settingLeft: { flexDirection: "row", alignItems: "center" },
    settingIcon: { marginRight: 10, color: colors.text },
    settingLabel: { fontSize: 14, fontWeight: "500", color: colors.text, }, // Menos grueso
    settingDescription: { fontSize: 10, color: colors.border, marginTop: 2 }, // Texto más pequeño y gris
});
