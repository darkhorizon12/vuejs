export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coach = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await fetch(`https://vue-http-demo-ff9cb-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coach),
    }).then();

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coach,
      id: userId
    });
  }
};