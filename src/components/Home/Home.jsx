import React, { useState, useEffect } from "react";
import movieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/Reducer";
import "./Home.scss";

// Components
import MovieListing from "../MovieListing/MovieListing";

function Home() {
    const dispatch = useDispatch(); // ใช้อัพเดตค่าให้กับ redux store
    const [search, setSearch] = useState(""); // ค่าเริ่มต้นการ search

    // ยิง API
    useEffect(() => {
        const fetchMovies = async () => {
            const searchKey = search ? search : "Thor"; // ถ้าไม่มีการ search ค่าเริ่มต้นจะเป็น Thor
            const res = await movieApi
                .get(`?apikey=${APIKey}&s=${searchKey}&type=movie`)
                .catch((error) => {
                    console.log(error);
                });
            setTimeout(() => {
                dispatch(addMovie(res.data.Search));
            }, 500);
        };

        fetchMovies();
    }, [search]); // ใช้ search ข้อมูล ทุกครั้งที่มีการเปลี่ยนแปลง state จะ fetch ใหม่
 
    return (
        <>
            <div>
                <h1 className="movies-title">Movies</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <MovieListing />
        </>
    );
}

export default Home;
