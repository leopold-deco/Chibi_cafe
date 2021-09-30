export const FETCH_FOODS = 'FETCH_FOODS';
export const SAVE_FOODS = 'SAVE_FOODCATEGORIES';
export const FETCH_FOODCATEGORIES = 'FETCH_FOODCATEGORIES';
export const SAVE_FOODCATEGORIES = 'SAVE_FOODCATEGORIES';


export const fetchFoods = () => ({ type: FETCH_FOODS });

export const saveFoods = (foods) => (
    {
        type: SAVE_FOODS,
        foods,
    }
);

export const fetchFoodCategories = () => ({ type: FETCH_FOODCATEGORIES});

export const saveFoodCategories = (foodCategories) => (
    {
        type: SAVE_FOODCATEGORIES,
        foodCategories,
    }
)