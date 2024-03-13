import navigationService from "./navigationService";

export function navigatToPage(pageName, navigation, params) {
  navigationService.navigation = navigation;
  navigationService.currentPage = pageName;
  navigation.navigate(pageName, params);
}

export function setRootPage(pageName, navigation, params) {
  navigationService.navigation = navigation;
  navigationService.currentPage = pageName;
  navigation.reset({
    index: 0,
    routes: [{ name: pageName, params }],
  });
}