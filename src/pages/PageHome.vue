<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
    <div
      class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
        bottom-slots
        v-model="newTweetContent"
        class="new-tweet"
        placeholder="What's happening"
        counter
        maxlength="280"
        autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://yt3.ggpht.com/R9KVkN6EXbPJSgqb2s0-Y9R9JN5aJDbsFvbvjoyhpP9Y76m0U1ezWd2xqTqFL09zNYV6I44u=s176-c-k-c0x00ffffff-no-rj-mo">
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          @click="addNewTweet"
          class="q-mb-md"
          :disable="!newTweetContent"
          unelevated
          rounded
          color="primary"
          label="Tweet"
          no-caps
          />
      </div>
    </div>

    <q-separator
      class="divider"
      size="20px"
      color="grey-2" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slower"
          leave-active-class="animated fadeIn slower"
        >
          <q-item
            v-for="tweet in tweets"
            :key="tweet.date"
            class="q-py-md">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://yt3.ggpht.com/L-xC8hEZoUpTPBOYkH9wM_KqMOQ__En-k2skSxPUpPBIZ1JHQsM34J9SquTdSt2qu8bdtzWBBw=s176-c-k-c0x00ffffff-no-rj-mo">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle-1">
                <strong>Vonn</strong>
                <span class="text-grey-7">
                  @vonngusion
                  <br class="lt-md">&bull; {{ formattedDate(tweet.date) }}
                </span>
              </q-item-label>
              <q-item-label class="tweet-content text-body1">
                {{ tweet.content }}
              </q-item-label>
              <div class="tweet-icons row justify-between q-mt-sm">
                <q-btn
                  flat
                  round
                  color="grey"
                  size="small"
                  icon="far fa-comment" />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="small"
                  icon="fas fa-retweet" />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="small"
                  icon="far fa-heart" />
                <q-btn
                  @click="deleteTweet(tweet)"
                  flat
                  round
                  color="grey"
                  size="small"
                  icon="fas fa-trash" />
              </div>
            </q-item-section>

            <q-item-section side top>

            </q-item-section>
          </q-item>

        </transition-group>
      <q-separator inset="item" />
    </q-list>
   </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { formatDistanceToNow } from 'date-fns'

export default {
  name: 'PageHome',
  data() {

    return {
      newTweetContent: '',
      tweets:[
        {
          content: 'Dude imagine being a bug and accidentally getting stuck in a car and driving far away from everything you know',
          date: 1681708066115
        },
        {
          content: 'listen up teens theres nothing "meme" about smokin cigarettes. its now "netflix and chill" to take a drug. fidget spin yourself into church',
          date: 1681708092854
        },
        {
          content: 'Your greatest glory is not in always falling but in rising every time you fall.',
          date: 1681708092854
        },
        {
          content: 'Stay committed to your decisions, but stay flexible in your approach.',
          date: 1681708092854
        }
      ]
    }
  },
  methods: {
    addNewTweet(){
      let newTweet = {
        content: this.newTweetContent,
        date: Date.now()
      }
      this.tweets.unshift(newTweet)
      this.newTweetContent = ''
    },
    deleteTweet(tweet){
      let dateToDelete = tweet.date
      let index = this.tweets.findIndex(tweet => tweet.date === dateToDelete)
      this.tweets.splice(index, 1)
    },


    formattedDate(value){
      const date = new Date(value)
      return formatDistanceToNow(date)
    }
  },
  // mounted() {
  //   db.collection('tweets').onSnapshot(function(snapshot) {
  //     snapshot.docChanges().forEach(function(change) {
  //       if(change.type === 'added') {
  //         console.log('new added')
  //       }
  //       if (change.type === 'modified') {
  //         console.log('modified')
  //       }
  //       if (change.type === 'removed'){
  //         console.log('removed')
  //       }
  //     });
  //   });


  // }
}
</script>
<style lang="sass">
.new-tweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.tweet-content
  white-space: pre-line
.tweet-icons
  margin-left: -5px
.tweet
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>
