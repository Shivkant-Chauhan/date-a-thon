import streamlit as st
import pickle as pkl
import pandas as pd
import numpy as np
import requests
import json

def recommend(song):
    song_index=songs_dict[songs_dict['track_name']==song].index[0]
    distances=similarity[song_index]
    songs_list=sorted(list(enumerate(distances)),reverse=True,key=lambda x:x[1])[1:7]
    recommended_songs=[]
    for i in songs_list:
        recommended_songs.append(songs_dict.iloc[i[0]].track_name)
    return recommended_songs
    
songs_dict=pkl.load(open("songs_dict.pkl","rb"))
songs_dict=pd.DataFrame(songs_dict)

similarity=pkl.load(open("similarity1.pkl","rb"))



st.title("Songs Recommendation System")

option=st.selectbox(
    'Which Song would you like to get recommendations for?',
       (songs_dict['track_name'].values))

if st.button('Show Recommendation'):
    recommended_songs = recommend(option)
    col1, col2, col3, col4, col5 ,col6,col7= st.beta_columns(7)
    with col1:
        st.text(recommended_songs[0])
    with col2:
        st.text(recommended_songs[1])
    with col3:
        st.text(recommended_songs[2])
    with col4:
        st.text(recommended_songs[3])
       
    with col5:
        st.text(recommended_songs[4])
       
    with col6:
        st.text(recommended_songs[5])
       
    with col7:
        st.text(recommended_songs[6])
        


