import React from 'react'
import Grid from "../components/Grid"
import {ItemsData} from "../data/items"
export default function MainPage() {
    return (
        <div className = "grid-container">
            {ItemsData.map((grid, i) => <Grid i = {i} title = {grid.title} img = {grid.img} date = {grid.date} className = {`grid-colomn_${i +1 }`} /> )}
        </div>
    )
}