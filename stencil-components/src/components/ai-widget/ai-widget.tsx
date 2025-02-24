import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'ai-widget',
  styleUrl: 'ai-widget.css',
  shadow: true
})
export class AIWidget {
  @State() message: string = "Ask me anything!";

  processVoiceCommand() {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.onresult = (event: any) => {
      this.message = event.results[0][0].transcript;
    };
    recognition.start();
  }

  render() {
    return (
      <div class="widget">
        <h2>AI Assistant</h2>
        <p>{this.message}</p>
        <button onClick={() => this.processVoiceCommand()}>🎤 Speak</button>
      </div>
    );
  }
}
