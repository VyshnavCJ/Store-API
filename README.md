# Store-API

    A user API for the purpose of querying data from database
    in the bases of different conditions provided by the user

## Install

    npm install

## Running

    npm start

## Base url

### `http://localhost:3000`

## Routes

    ### api/v1/products/ - query operations

    ### api/vi/products/static - to show all data

## Query options available

    `featured` - show data according to feature value true or false

    `company` - show data according to company name

    `name` - show data according to name

    `numericFilters` - show data according to rating and price range
        ### operation
            api/v1/products?numericFilters=price>40,rating>=4.5

    `sort` - sort data

    `fields` - show only required fields

    `page` - show different page

    `limit` - show limited content

## Note

### Add a `.env `file to the root of your project with the following content:

`MONGO_URI=<mongo url>`
