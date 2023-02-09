import NavbarComponent from "@/Components/Navbar/NavbarComponent";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import SplashTrack from "@/../Images/HomeImage/SplashTrack.jpg";
import gps from "@/../Images/HomeImage/gps.png";
import Image from "react-bootstrap/Image";
import Hero from "./Hero";

const HomePage = (props) => {
    const [count, setCount] = useState(0);
    const tes = useEffect(() => {
        setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
    }, []);

    if (count <= 2) {
        return (
            <div
                className="container-xxl justify-center d-flex align-items-center "
                style={{ height: 1005 }}
            >
                <img className="" src={gps} alt="" />
            </div>
        );
    }
    return (
        <div className="" style={{ backgroundColor: "#E7EEFE", height: 768 }}>
            <Head title="home page" />
            <div className="">
                <NavbarComponent />
                <Hero />
            </div>
        </div>
    );
};

export default HomePage;
