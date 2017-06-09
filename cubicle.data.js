class MockCubeData {
    static rows1() {
        return [
            {name: "Year", values: ["2015", "2016", "2017"]}, // NOTE: assuming these are unique i.e. paths
            {name: "Month", values: ["January", "February"]}
        ]
    }
    static rows2() {
        return [
            {name: "Year", values: ["2015", "2016", "2017"]},
            {name: "Month", values: ["January", "February"]}
        ]
    }
    static rows3() {
        return [
            {name: "Year", values: ["2015", "2016", "2017"]}
        ]
    }
    static rows4() {
        return [
            {name: "Year", values: ["2015", "2016", "2017"]},
            {name: "Month", values: ["January", "February"]},
            {name: "Day", values: ["Monday", "Tuesday"]}
        ]
    }
    static cols1() {
        return [
            {name: "Location", values: ["Toronto", "Ottawa", "Montreal"]},
            {name: "Type", values: ["Restaurant", "Mall", "Theatre"]}
        ]
    }
    static cols2() {
        return [
            {name: "Location", values: ["Toronto", "Ottawa", "Montreal"]}
        ]
    }
    static cols3() {
        return [
            {name: "Location", values: ["Toronto", "Ottawa", "Montreal"]}
        ]
    }
    static cols4() {
        return [
            {name: "Location", values: ["Toronto", "Ottawa", "Montreal"]},
            {name: "Type", values: ["Restaurant", "Mall", "Theatre"]},
            {name: "Age", values: ["Ten", "Twenty", "Thirty"]}
        ]
    }
    static data1() {
        return [
            {fields: ["2015", "January", "Toronto", "Restaurant"], value: 123},
            {fields: ["2015", "January", "Toronto", "Mall"], value: 123},
            {fields: ["2015", "January", "Toronto", "Theatre"], value: 123},
            {fields: ["2015", "February", "Toronto", "Restaurant"], value: 234},
            {fields: ["2016", "February", "Toronto", "Restaurant"], value: 345},
            {fields: ["2015", "January", "Ottawa", "Restaurant"], value: 456},
            {fields: ["2015", "January", "Ottawa", "Theatre"], value: 567}
        ]
    }
    static data2() {
        return [
            {fields: ["2015", "January", "Toronto"], value: 1234},
            {fields: ["2015", "January", "Ottawa"], value: 1234},
            {fields: ["2015", "January", "Montreal"], value: 1234},
            {fields: ["2015", "February", "Toronto"], value: 2345},
            {fields: ["2015", "February", "Ottawa"], value: 2345},
            {fields: ["2015", "February", "Montreal"], value: 2345},
            {fields: ["2016", "January", "Toronto"], value: 3456},
            {fields: ["2016", "January", "Ottawa"], value: 3456},
            {fields: ["2016", "January", "Montreal"], value: 3456},
            {fields: ["2016", "February", "Toronto"], value: 3456},
            {fields: ["2016", "February", "Ottawa"], value: 3456},
            {fields: ["2016", "February", "Montreal"], value: 3456},
            {fields: ["2017", "January", "Toronto"], value: 4567},
            {fields: ["2017", "January", "Ottawa"], value: 4567},
            {fields: ["2017", "January", "Montreal"], value: 4567},
            {fields: ["2017", "February", "Toronto"], value: 5678},
            {fields: ["2017", "February", "Ottawa"], value: 5678},
            {fields: ["2017", "February", "Montreal"], value: 5678}
        ]
    }
    static data3() {
        return [
            {fields: ["2015", "Toronto"], value: 12345},
            {fields: ["2015", "Ottawa"], value: 23456},
            {fields: ["2015", "Montreal"], value: 45678},
            {fields: ["2016", "Toronto"], value: 12345},
            {fields: ["2016", "Ottawa"], value: 23456},
            {fields: ["2016", "Montreal"], value: 45678},
            {fields: ["2017", "Toronto"], value: 12345},
            {fields: ["2017", "Ottawa"], value: 23456},
            {fields: ["2017", "Montreal"], value: 45678}
        ]
    }
    static data4() {
        return [
            {fields: ["2015", "January", "Monday", "Toronto", "Restaurant", "Ten"], value: 12},
            {fields: ["2015", "February", "Monday", "Toronto", "Restaurant", "Ten"], value: 23},
            {fields: ["2016", "February", "Monday", "Toronto", "Restaurant", "Ten"], value: 34},
            {fields: ["2015", "January", "Monday", "Ottawa", "Restaurant", "Ten"], value: 45},
            {fields: ["2015", "January", "Monday", "Ottawa", "Theatre", "Ten"], value: 56}
        ]
    }
}

export default MockCubeData