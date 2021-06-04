export const selectProduct = async (dispatch, product) => {
    return dispatch ({
        type: "SET_SELECTED_PRODUCT",
        payload: product,
    })
}