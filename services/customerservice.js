import Api from '@/services/api'

export default {
  postCustomer (customer) {
    return Api().post('/customers', customer,
      { headers: {'Content-type': 'application/json'} })
  }
}
