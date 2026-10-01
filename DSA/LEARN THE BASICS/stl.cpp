#include <bits/stdc++.h>
using namespace std;

void pair_stl(){
    pair <int,int>p = {1,3};
    cout<<p.first; //1
    pair<int,pair<int,int>>m = {1,{2,3}}; //can be nested
    cout<<m.second.first; //2
    pair <int,int> arr[3] = {{1,2},{3,4},{5,1}};
    cout<<arr[0].first;//1
}

void vector_stl(){
    /*vector <int> v;
    v.push_back(1);
    v.emplace_back(3); //dynamically creates memory
    //the difference is prominent when creatig objects
    // push_back - pushes already created objects
    //emplace_back - created in the space

    cout<<v[1]; //3

    vector<pair<int,int>> vec;
    vec.push_back({1,3});
    vec.emplace_back(3,4);
    cout<<vec[1].first;
    //cout<<vec[1] will NOT work bcz cout does not support pair but it can return a pair;

    vector <int> v1(5,100); //{100,100,100,100,100}
    vector<int>v2(5); //garbage value of vector of size 5  
    vector <int> v3(5,20); //{20,20,20,20,20}
    vector<int> v4(v3) ; //will copy the content of v3, so it will be another container having {20,20,20,20,20}
     */
    vector <int> v = {20,20,15,6,7};
    vector <int> :: iterator it = v.begin(); 
    //datatype :: iterator variable = **memory address**
    //iterator points at the memory address

    it++;
    cout<<*it<< " ";
    it = it + 2;
    cout<<*it<< " ";

    vector <int> vec = {10,20,30,40};

    vector <int> :: iterator i = vec.end(); 
    //end will point to a location after 40, NOT at 40
    //it-- is 40
    vector <int> :: reverse_iterator m = vec.rend(); //reverse end - location before 10
    vector <int> :: reverse_iterator p = vec.rbegin(); //reverse begin - 40
    //if we do m++ we will move in the opp. dxnn of convention 
    cout<<vec.back();
    




}
int main(){
    //pair_stl();
    vector_stl();
}