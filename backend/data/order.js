const order = [
    {
        "_id":{"$oid":"617628bb6acea4f0f1aa97b1"},
        "user":{"$oid":"6175f9bbfbf8321a2e4b84e8"},
        "orderItems":[{"name":"Logitech G-Series Gaming Mouse","qty":{"$numberInt":"1"},"image":"/images/mouse.jpg","price":"49.99","product":{"$oid":"6175f9bbfbf8321a2e4b851a"},"_id":{"$oid":"617628bb6acea4f0f1aa97b2"}}],
        "shippingAddress":{"fullname":"Van Nguyen Nguyen","phone":"234234","address":"fghfgh","city":"fghfghfgh","postalCode":"2204","state":"New South Wales"},
        "paymentMethod":"PalPal",
        "taxPrice":{"$numberDouble":"7.5"},
        "shippingPrice":{"$numberInt":"30"},
        "totalPrice":{"$numberDouble":"87.49"},
        "isPaid":true,
        "isDelivered":true,
        "createdAt":{"$date":{"$numberLong":"1635133627245"}},
        "updatedAt":{"$date":{"$numberLong":"1635141367684"}},
        "__v":{"$numberInt":"0"},
        "paidAt":{"$date":{"$numberLong":"1635141162668"}},
        "paymentResult":{"id":"7HC74348DW648272E","status":"COMPLETED","update_time":"2021-10-25T05:52:42Z","email_address":"sb-sof6f8149466@personal.example.com"},
        "deliveredAt":{"$date":{"$numberLong":"1635141367679"}}
    },

    {
        "_id":{"$oid":"6177a5e9d3ec69c9030fe399"},
        "user":{"$oid":"6175f9bbfbf8321a2e4b84e8"},
        "orderItems":[{"name":"Sony Playstation 4 Pro White Version","qty":{"$numberInt":"1"},"image":"/images/playstation.jpg","price":"399.99","product":{"$oid":"6175f9bbfbf8321a2e4b850d"},"_id":{"$oid":"6177a5e9d3ec69c9030fe39a"}}],
        "shippingAddress":{"fullname":"Van Nguyen Nguyen","phone":"234234","address":"fghfgh","city":"fghfghfgh","postalCode":"2204","state":"New South Wales"},
        "paymentMethod":"PalPal",
        "taxPrice":{"$numberInt":"60"},
        "shippingPrice":{"$numberInt":"0"},
        "totalPrice":{"$numberDouble":"459.99"},
        "isPaid":true,
        "isDelivered":true,
        "createdAt":{"$date":{"$numberLong":"1635231209220"}},
        "updatedAt":{"$date":{"$numberLong":"1635231235819"}},
        "__v":{"$numberInt":"0"},
        "paidAt":{"$date":{"$numberLong":"1635231223732"}},
        "paymentResult":{"id":"20G761490A1909322","status":"COMPLETED","update_time":"2021-10-26T06:53:43Z","email_address":"sb-sof6f8149466@personal.example.com"},
        "deliveredAt":{"$date":{"$numberLong":"1635231235817"}}
    }
]