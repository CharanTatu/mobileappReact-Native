class NavigationService {
    constructor() {
      this._navigation = null;
      this._currentPage = null;
    }
  
    set navigation(nav) {
      this._navigation = nav;
    }
  
    get navigation() {
      return this._navigation;
    }
  
    set currentPage(page) {
      this._currentPage = page;
    }
  
    get currentPage() {
      return this._currentPage;
    }
  }
  
  const navigationService = new NavigationService();
  
  export default navigationService;
  