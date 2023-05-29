import { useEffect, useState } from "react";

const useMenu = ( category ) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const categoryMenu = data.filter(
          (menuItem) => menuItem.category === category
        );
        setMenu(categoryMenu);
        setLoading(false);
      });
  }, [category]);

  return [menu, loading];
};

export default useMenu;
