import { useRef, useState, useLayoutEffect } from 'react';
import { useLocation } from "react-router-dom";
import { NavigationModel } from "../model/modelNavigation";

export interface tamLay {
    sm: number,
    lg: number,
    md: number
    xs: number
}

type typeDisplay = "end" | "start" | "none" | "block" | "center";

type typeDirection = "right" | "left";

export const useNavigationComponent = (sizeLayout: (sizeL: tamLay) => void, options: NavigationModel[]) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [sizeGrid, setSizeGrid] = useState({
        sm: 3.2, lg: 2.0, md: 3.2, xs: 3.0
    });
    const [displayMenu, setMenuDisplay] = useState<typeDisplay>("end");
    const [displayText, setMenuText] = useState<typeDisplay>("end");
    const containerRef = useRef(null);
    const { pathname } = useLocation();

    useLayoutEffect(() => {

        const _index = options.findIndex(c => c.path.toLowerCase().includes(pathname.toLowerCase()));

        if (_index >= 0) setSelectedIndex(_index);

    }, []);


    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {

        setSelectedIndex(index);
    };

    const hanbleClickMenu = () => {
        setMenuDisplay((prev) => {

            if (prev == "end") {
                setSizeGrid({ sm: 3, lg: 0.6, md: 0.6, xs: 3 });
                sizeLayout({ sm: 8.9, lg: 11.3, md: 11.3, xs: 8.9 })
                setMenuText("none");
                return "center";
            }
            else {
                setSizeGrid({ sm: 3.2, lg: 2.0, md: 3.2, xs: 3.0 });
                sizeLayout({ sm: 7, lg: 10, md: 10, xs: 7 })
                setMenuText("block");
                return "end";
            }
        });
    }

    return {
        displayMenu, displayText, sizeGrid,
        containerRef, selectedIndex,
        handleListItemClick, hanbleClickMenu
    }
}