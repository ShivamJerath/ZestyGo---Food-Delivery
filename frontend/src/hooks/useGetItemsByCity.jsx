import axios from 'axios'
import { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setItemsInMyCity } from '../redux/userSlice'

function useGetItemsByCity() {
  const dispatch = useDispatch()
  const { currentCity } = useSelector(state => state.user)

  useEffect(() => {

    // ✅ IMPORTANT FIX
    if (!currentCity || currentCity.trim() === "") {
      console.log("City not available yet ❌")
      return
    }

    const fetchItems = async () => {
      try {
        console.log("Fetching items for:", currentCity) // DEBUG

        const result = await axios.get(
          `${serverUrl}/api/item/get-by-city/${currentCity}`,
          { withCredentials: true }
        )

        dispatch(setItemsInMyCity(result.data))

      } catch (error) {
        console.log("ERROR:", error.response?.data || error.message)
      }
    }

    fetchItems()

  }, [currentCity])

}

export default useGetItemsByCity