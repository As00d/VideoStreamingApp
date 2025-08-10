# This project is under progress kind of youtube clone

    - Initial screenshot of the app
    - For state management we will be using redux
        - Install redux
        - Create a store
        - Create a slice
        - Provide store to the application

<img width="1512" alt="Image" src="https://github.com/user-attachments/assets/2006e663-691e-4ce7-820d-bb176194f33b" />

# Next steps added video container and video card and used youtube real api

<img width="1710" alt="Image" src="https://github.com/user-attachments/assets/b6a8dfb2-5776-4f29-b941-985ae14bb87f" />

### Introduction to a new concept called debouncing

- Debouncing is a concept where we do not make api call for every key stroke search button
- Implemented debouncing in the application using setTimeout function

Lets talk about cache, the first thing that we are doing is to create an slice, a slice which will store the result of caching. The next thing that we need to discuss is which data structure one should use to store the searched value.
Possible option once could think of is - using array - but there is an issue for a normal search operation in array we need O(n)
whereas if we have {} as an initial value then it would be o(1) so we need to think of the data structure aspect also.
