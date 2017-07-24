## ResearchGate Challenge

### be sure you have the prereqs installed
```
brew install node
brew install watchman
npm install -g react-native-cli
```
### challenge install instructions:
```
git clone https://github.com/leejms/RGChallenge.git
cd RGChallenge
yarn
yarn run ios
```

### notes:
Even though this challenge _could_ have been executed with a single large file with components and local state, I thought it was important to treat is as an actual project.

The folder structure is setup like a larger application including jest snapshot tests for the components.

Yes, Redux is WAY overkill, but it is the common standard and best practices and it _does_ make following and unfollowing people easier and clear.

Please let me know if you have any issues.
