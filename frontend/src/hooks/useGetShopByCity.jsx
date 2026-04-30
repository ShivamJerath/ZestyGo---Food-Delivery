import axios from 'axios'
import { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setShopsInMyCity } from '../redux/userSlice'

function useGetShopByCity() {
  const dispatch = useDispatch()
  const { currentCity } = useSelector(state => state.user)

  useEffect(() => {

    // ✅ IMPORTANT FIX
    if (!currentCity || currentCity.trim() === "") {
      console.log("City not ready ❌")
      return
    }

    const fetchShops = async () => {
      try {
        console.log("Fetching shops for:", currentCity)

        const result = await axios.get(
          `${serverUrl}/api/shop/get-by-city/${currentCity}`,
          { withCredentials: true }
        )

        dispatch(setShopsInMyCity(result.data))

      } catch (error) {
        console.log("ERROR:", error.response?.data || error.message)
      }
    }

    fetchShops()

  }, [currentCity])
}

export default useGetShopByCity