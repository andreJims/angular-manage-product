export class ApiUrl {
  public static HOST = 'http://localhost:8080';
  public static API_ROOT = ApiUrl.HOST + '/api';

  // PRODUCT
  public static URL_PRODUCT = ApiUrl.API_ROOT + '/product';
  public static URL_SEARCH_PRODUCT = ApiUrl.URL_PRODUCT + '/search';
  public static URL_FIND_PRODUCT_BY_NAME = ApiUrl.URL_PRODUCT + '/find/name';
  public static URL_FIND_PRODUCT_BY_CODE = ApiUrl.URL_PRODUCT + '/find/code';
}
