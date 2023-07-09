# 🧑‍💻 Maria Florencia Campos

### Frontend Engineer Application

### 🔧 Tech stack used:

- ⚛️ **Next Js / React Js / Typescript**
- 💄 **Sass** for styles

## Getting Started

To run the development server:

```bash
npm run dev
```

### 📁 About the scaffolding

I decided to go with the typical `src/components` scaffolding, then inside of each component I added 2 files:

- The actual component, in a named `.tsx` file.
- The styles for this component, in a `.scss` file.

There are some other folders inside of src:

- The `context` folder contains the context/provider with its actions and hooks.
- A `types` folder containing some types that were used in multiple files across the project.

### 🎨 The styles

I tried to stick with the **BEM** naming convention.
I kept some general rules and mixins inside of `src/app/page.scss`

### 📝 How it works

This is an web app in which a user can easily schedule activities by clicking on the purple buttons and selecting the chosen information.
The information is saved in the local storage so that when the page is reloaded, the data of the already scheduled activities is still saved.
The user has the ability to:

- Create new tasks
- Edit existing tasks
- Delete tasks.

### Follow Up Questions

### ⚡️ What libraries did you use? What are they used for? Why did you choose them specifically?

- Next Js - Is the default method recommended in the react [documentation](https://react.dev/learn/start-a-new-react-project) as it provides access to the most commonly used featueres that any site might need.
- React Date Picker - To easily resolve the date/time picker

### ⚡️ What improvements or new features would you add if you had more time to work on the problem?

- Split CSS into different bundles (right now is one for both mobile/desktop)
- Add tests !!!
- Fix some missing types
- Add a cache to store the api response to reduce the loding time
- Improve the performance of the Modal Component (I feel I have a lot to work on there)
- Abstract the api call to a service
- Have an API to store thhe data instead of using the device local storage

### ⚡️ Which parts did you find most difficult and which parts did you spend the most time with?

I lost most time that i like to admit implementing the date picker and formatting the date.

### ⚡️ What are key things to consider when deploying this application for customer use/production?

Things to consider before deploying this application for production:

- My applicacion has serverside rendering.
- We're using the local storage to store the data so it will not be lost o deleted fron the device.

### Feedback:

### How did you find the challenge overall? Did you have any issues or have difficulties completing?

I had fun doing it and I found it very dynamic, I would liked to have more time to perfect it, but I'll continue improving it for myself.
When I read the statement for the first time I understood that I should show the weather for each of the activities but then I found that it's not possible to get weather by date in that API, so I decided to show the current weather in a card.

### suggestions or improvements:

I would like to investigate more about the weather api and see if I can show the weather for each of the activities, it could be a good exercise.
