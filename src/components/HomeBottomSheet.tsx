import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetProps } from '@gorhom/bottom-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HomeBottomSheetProps {
    sheetRef: React.RefObject<BottomSheet>;
    isSheetOpen: boolean;
    setIsSheetOpen: (isOpen: boolean) => void;
}

export default function HomeBottomSheet({ sheetRef, isSheetOpen, setIsSheetOpen }: HomeBottomSheetProps) {
    const opacity = useRef(new Animated.Value(0)).current;
    const snapPoints = ['40%'];

    const handleCloseSheet = () => {
        sheetRef.current?.close();
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setIsSheetOpen(false));
    };

    return (
        <>
            {isSheetOpen && (
                <TouchableWithoutFeedback onPress={handleCloseSheet}>
                    <Animated.View style={[styles.overlay, { opacity }]} />
                </TouchableWithoutFeedback>
            )}

            <BottomSheet ref={sheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose={true} onClose={handleCloseSheet}
                backgroundComponent={({ style }) => <View style={[style, styles.shittContainer]} />}
                handleIndicatorStyle={{ backgroundColor: '#F9F5EA' }}
            >
                <BottomSheetView style={styles.menuContainer}>
                    <Text style={styles.menuTitle}>Opciones</Text>
                    <View style={styles.subMenuContainer}>
                        <MenuItem icon="person-add" text="Añadir Roommates" onPress={() => console.log('Añadir Roommates')} isLast={false} />
                        <MenuItem icon="person-add" text="Añadir Roommates" onPress={() => console.log('Añadir Roommates')} isLast={false} />
                        <MenuItem icon="bar-chart" text="¿Quién limpia más?" onPress={() => console.log('Ver estadísticas')} isLast />
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </>
    );
}

interface MenuItemProps {
    icon: string;
    text: string;
    onPress: () => void;
    isLast: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onPress, isLast }) => (
    <TouchableOpacity style={[styles.menuItem, isLast && styles.lastMenuItem]} onPress={onPress}>
        <Ionicons name={icon} size={22} color="#F9F5EA" />
        <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    shittContainer: {
        padding: 20,
        backgroundColor: '#01151C',
        borderRadius: 12,
    },
    menuContainer: {
        backgroundColor: '#01151C',
    },
    subMenuContainer: {
        marginHorizontal: 10,
        marginVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#03202A',
        borderRadius: 12,
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F9F5EA',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBlockColor: '#F9F5EA',
    },
    lastMenuItem: {
        borderBottomWidth: 0,
    },
    menuText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#F9F5EA',
    },
});
