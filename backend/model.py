import pickle


def predict_data(n, p, k, temp, humid, ph, rain):
    array = ['apple', 'banana', 'blackgram', 'chickpea', 'coconut', 'coffee', 'cotton', 'grapes', 'jute', 'kidneybeans', 'lentil',
             'maize', 'mango', 'mothbeans', 'mungbean', 'muskmelon', 'orange', 'papaya', 'pigeonpeas', 'pomegranate', 'rice', 'watermelon']
    load_data = pickle.load(open('Baggmodel.sav', 'rb'))
    pre1 = load_data.predict([[n, p, k, temp, humid, ph, rain]])

    data = array[pre1[0]]
    return data

print(predict_data(1,1,1,1,1,1,1))

