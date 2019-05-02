class VoiceRecorder {
  createTask() {
    console.log("Creating a voice task");
  }
}

class VideoRecorder {
  createTask() {
    console.log("creating a task via video");
  }
}

class Recorder {
  recordType() {
    const recorder = this.chooseRecordType();
    recorder.createTask();
  }
}

class VoiceTask extends Recorder {
  chooseRecordType() {
    return new VoiceRecorder();
  }
}

class VideoTask extends Recorder {
  chooseRecordType() {
    return new VideoRecorder();
  }
}

const audioUser = new VoiceTask();
audioUser.recordType();

const videoUser = new VideoTask();
videoUser.recordType();
