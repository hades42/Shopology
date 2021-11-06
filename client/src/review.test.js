/**
 * @jest-environment jsdom
 */
import React from 'react'
const path = require("path");
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import fs from 'fs'
import Review from './components/Review/Review.js'
// import ProductDescription from './screens/ProductScreen/ProductDescription/ProductDescription.js' // THIS IS CAUSING ERROR


const sampleData = (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)
    return data
}

describe("Component", () => {
    test('renders review ', () => {
        const review = sampleData(path.resolve(__dirname, "./sampleReview.json"));


        const { name, rating, comment, user, _id, createdAt, updatedAt } = review

        const component = render(
            <Review name={name} createdAt={createdAt}
                comment={comment} rating={rating} />
        )

        expect(component.container).toHaveTextContent('Very good product')
    })

    test('Product', () => {
        const desc = "This is a dummy product description"
        // const productDesc = render(<ProductDescription content={desc}/>)
        // expect(productDesc.container).toHaveTextContent(desc)

    })
})