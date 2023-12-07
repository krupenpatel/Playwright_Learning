import {test as myTest} from "@playwright/test";
type krupen={
    age : number
    email : string
}

const fixTest = myTest.extend<krupen>({
    age: 27,
    email: "krupen.patel@gmail.com"
})

export const test = fixTest