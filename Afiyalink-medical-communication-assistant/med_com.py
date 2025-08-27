#!/usr/bin/env python3
"""
RELIABLE MEDICAL COMMUNICATION SYSTEM
Definitive Fix: TTS engine is now stateless and reliable for every message.
"""

import os
import sys
import time
import sqlite3
import logging
import tempfile
from datetime import datetime
import warnings

warnings.filterwarnings("ignore")

# Core dependencies
import numpy as np
import sounddevice as sd
from scipy.io.wavfile import write as wav_write
import whisper
import pyttsx3

# Enhanced TTS
try:
    from gtts import gTTS
    import pygame
    # Initialize pygame mixer once at the start
    pygame.mixer.init()
    GTTS_AVAILABLE = True
except ImportError:
    GTTS_AVAILABLE = False

# Logging
logging.basicConfig(
    level=logging.WARNING,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[logging.FileHandler('medical_system.log')]
)

class SimpleVAD:
    """Simple but effective voice activity detection"""
    
    def __init__(self):
        self.sensitivity = 0.02
        self.background_level = 0.01
        
    def calibrate(self, audio_data):
        """Quick calibration"""
        try:
            volume = np.sqrt(np.mean(audio_data ** 2))
            self.background_level = volume * 1.5
            self.sensitivity = max(self.background_level * 2, 0.02)
        except:
            pass
    
    def is_speech(self, audio_chunk):
        """Check if audio contains speech"""
        try:
            volume = np.sqrt(np.mean(audio_chunk ** 2))
            return volume > self.sensitivity
        except:
            return False

class ReliableTTS:
    """Reliable text-to-speech system - DEFINITIVE FIX"""
    
    def __init__(self):
        self.temp_files = []
    
    def speak(self, text):
        """Speak text reliably by creating a fresh engine every time."""
        if not text.strip():
            return False
        
        print("Converting to speech...")
        
        # <<< FIX >>>: The primary method is now the most reliable one.
        # It creates a new engine instance every time to avoid state issues.
        if self._system_speak(text):
            print("✓ Speech delivered via System TTS")
            return True
        
        print("✗ System TTS failed, trying Google TTS fallback...")
        
        if self._gtts_speak(text):
            print("✓ Speech delivered via Google TTS")
            return True
        
        print("❌ All TTS methods failed")
        return False
    
    def _system_speak(self, text):
        """
        <<< CRITICAL FIX >>>
        Creates a completely fresh, single-use TTS engine for each message.
        This prevents the engine from getting into a "stuck" state.
        """
        try:
            # 1. Create a brand new engine
            engine = pyttsx3.init()
            engine.setProperty('rate', 150)
            engine.setProperty('volume', 0.9)
            
            # 2. Set the desired voice
            voices = engine.getProperty('voices')
            if voices:
                for voice in voices:
                    if 'female' in voice.name.lower() or 'zira' in voice.name.lower():
                        engine.setProperty('voice', voice.id)
                        break
            
            # 3. Speak the text
            engine.say(text)
            engine.runAndWait()
            
            # 4. Shut down and destroy the engine
            engine.stop()
            del engine
            
            return True
        except Exception as e:
            print(f"System TTS error: {e}")
            return False
    
    def _gtts_speak(self, text):
        """Google TTS fallback with robust pygame handling."""
        if not GTTS_AVAILABLE:
            return False
        
        try:
            # Re-initialize pygame mixer to clear any stuck states
            pygame.mixer.quit()
            pygame.mixer.init()
            
            with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as temp_file:
                tts = gTTS(text=text, lang='en', slow=False)
                tts.save(temp_file.name)
                temp_path = temp_file.name
            
            self.temp_files.append(temp_path)
            
            pygame.mixer.music.load(temp_path)
            pygame.mixer.music.play()
            
            while pygame.mixer.music.get_busy():
                time.sleep(0.1)
            
            return True
        except Exception as e:
            print(f"Google TTS error: {e}")
            return False
    
    def cleanup(self):
        """Clean up temporary files."""
        try:
            if GTTS_AVAILABLE:
                pygame.mixer.quit()
        except:
            pass
        
        for temp_file in self.temp_files:
            try:
                if os.path.exists(temp_file):
                    os.remove(temp_file)
            except:
                pass
        self.temp_files.clear()

class SimpleDatabase:
    """Simple conversation logging"""
    
    def __init__(self):
        self.db_path = "conversations.db"
        self.session_id = f"session_{int(time.time())}"
        self.init_db()
    
    def init_db(self):
        """Initialize database"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                conn.execute('''
                    CREATE TABLE IF NOT EXISTS messages (
                        id INTEGER PRIMARY KEY,
                        session_id TEXT,
                        timestamp TEXT,
                        speaker TEXT,
                        message TEXT
                    )
                ''')
        except:
            pass
    
    def log(self, speaker, message):
        """Log message"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                conn.execute(
                    'INSERT INTO messages (session_id, timestamp, speaker, message) VALUES (?, ?, ?, ?)',
                    (self.session_id, datetime.now().isoformat(), speaker, message)
                )
        except:
            pass

class AudioProcessor:
    """Simple audio processing"""
    
    def __init__(self):
        self.sample_rate = 16000
        self.vad = SimpleVAD()
    
    def calibrate(self):
        """Calibrate audio"""
        print("Calibrating audio... Please stay quiet for 2 seconds.")
        try:
            silence = sd.rec(int(2 * self.sample_rate), samplerate=self.sample_rate, channels=1, dtype='float32')
            sd.wait()
            self.vad.calibrate(silence.flatten())
            print("Audio calibration completed.")
        except Exception as e:
            print(f"Calibration failed: {e}")
    
    def listen(self, max_duration=30):
        """Listen for speech"""
        frames = []
        speech_detected = False
        silence_count = 0
        max_silence_chunks = 15  # Wait for 1.5 seconds of silence
        
        try:
            with sd.InputStream(samplerate=self.sample_rate, channels=1, dtype='float32') as stream:
                start_time = time.time()
                
                while time.time() - start_time < max_duration:
                    chunk, _ = stream.read(int(self.sample_rate * 0.1))
                    chunk_flat = chunk.flatten()
                    
                    if self.vad.is_speech(chunk_flat):
                        if not speech_detected:
                            speech_detected = True
                            print("Recording...")
                        frames.append(chunk_flat)
                        silence_count = 0
                    elif speech_detected:
                        frames.append(chunk_flat)
                        silence_count += 1
                        if silence_count > max_silence_chunks:
                            break
                
                return np.concatenate(frames) if frames else None
                
        except Exception as e:
            print(f"Recording error: {e}")
            return None

class MedicalSystem:
    """Main medical communication system"""
    
    def __init__(self):
        print("\n" + "=" * 50)
        print("RELIABLE MEDICAL COMMUNICATION SYSTEM")
        print("=" * 50)
        
        self.audio = AudioProcessor()
        self.tts = ReliableTTS()
        self.db = SimpleDatabase()
        self.language = "en"
        self.running = True
        
        print("Loading speech recognition...")
        try:
            self.whisper = whisper.load_model("base")
            print("Speech recognition ready.")
        except Exception as e:
            print(f"Failed to load speech recognition: {e}")
            sys.exit(1)
        
        self.audio.calibrate()
        
        self.exchange_count = 0
        self.start_time = time.time()
    
    def check_commands(self, text):
        """Check for system commands"""
        if not text:
            return None
        
        text = text.lower().strip()
        if text in ['exit', 'quit', 'stop']: return 'exit'
        elif text in ['menu', 'options']: return 'menu'
        elif text in ['language', 'lang']: return 'language'
        elif text in ['help']: return 'help'
        return None
    
    def recognize_speech(self):
        """Recognize doctor's speech"""
        print("\nListening for doctor...")
        
        audio_data = self.audio.listen()
        if audio_data is None:
            print("No speech detected.")
            return ""
        
        print("Processing speech...")
        
        try:
            with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_file:
                wav_write(temp_file.name, self.audio.sample_rate, (audio_data * 32767).astype(np.int16))
                path = temp_file.name
            
            result = self.whisper.transcribe(path, language=self.language if self.language != "auto" else None)
            text = result["text"].strip()
            
            os.unlink(path)
            
            if text:
                print(f"Doctor: {text}")
                self.db.log("Doctor", text)
                return text
            else:
                print("No speech detected.")
                return ""
                
        except Exception as e:
            print(f"Speech recognition failed: {e}")
            return ""
    
    def speak_patient_message(self, text):
        """Speak patient's message using the new reliable TTS."""
        if not text.strip():
            return False
        
        print(f"Patient: {text}")
        
        success = self.tts.speak(text)
        
        if success:
            self.db.log("Patient", text)
        else:
            print("⚠️ TTS failed, but message was logged.")
            self.db.log("Patient", f"[TTS FAILED] {text}")
        
        return success
    
    def show_menu(self):
        """Show main menu"""
        while True:
            print("\n" + "="*30 + "\nMAIN MENU\n" + "="*30)
            print("1. Continue Communication\n2. Change Language\n3. Show Help\n4. Exit System")
            choice = input("Select (1-4): ").strip()
            
            if choice == "1": return 'continue'
            elif choice == "2": self.change_language()
            elif choice == "3": self.show_help()
            elif choice == "4": return 'exit'
            else: print("Invalid choice.")
    
    def change_language(self):
        """Change language"""
        print("\nLanguage Options:\n1. English\n2. Arabic\n3. Auto-detect")
        choice = input("Select (1-3): ").strip()
        if choice == "1": self.language = "en"
        elif choice == "2": self.language = "ar"
        elif choice == "3": self.language = "auto"
        else: print("Invalid choice.")
        print(f"Language set to: {self.language}")
    
    def show_help(self):
        """Show help"""
        print("\nHELP - Commands work anytime:\n- 'exit', 'quit': End session\n- 'menu': Main menu\n- 'language': Change language\n- 'help': Show this help")
        input("\nPress Enter to continue...")
    
    def handle_command(self, command):
        """Handle system command"""
        if command == 'exit':
            return 'exit' if input("Exit system? (y/n): ").strip().lower() == 'y' else 'continue'
        elif command == 'menu': return self.show_menu()
        elif command == 'language': self.change_language(); return 'continue'
        elif command == 'help': self.show_help(); return 'continue'
        return 'continue'
    
    def communication_loop(self):
        """Main communication loop with simplified logic."""
        print("\nCommunication Active\nCommands: 'exit', 'menu', 'language', 'help'")
        
        try:
            while self.running:
                self.exchange_count += 1
                print(f"\n--- Exchange {self.exchange_count} ---")
                
                # Doctor phase
                doctor_text = self.recognize_speech()
                
                command = self.check_commands(doctor_text)
                if command:
                    if self.handle_command(command) == 'exit': break
                    continue
                
                if not doctor_text:
                    if input("Try again? (y/n): ").strip().lower() != 'y': continue
                    else: continue
                
                # Patient phase
                while True:
                    patient_input = input("\nPatient message: ").strip()
                    
                    if not patient_input:
                        print("No message entered.")
                        continue
                    
                    command = self.check_commands(patient_input)
                    if command:
                        if self.handle_command(command) == 'exit':
                            self.running = False
                        break
                    
                    # Call the reliable speak function and then break to next exchange
                    self.speak_patient_message(patient_input)
                    break
                
                if not self.running: break
                    
        except KeyboardInterrupt:
            print("\nSession interrupted.")
        
        self.end_session()
    
    def end_session(self):
        """End session"""
        duration = time.time() - self.start_time
        print(f"\nSession Summary:\nDuration: {duration/60:.1f} minutes\nExchanges: {self.exchange_count}")
        self.tts.cleanup()
        print("System closed.")
    
    def run(self):
        """Run the system"""
        print("\nInitial Setup:")
        self.change_language()
        print(f"\nSystem Ready")
        self.communication_loop()

def main():
    """Main entry point"""
    try:
        print("Checking system components...")
        import whisper, sounddevice, numpy, pyttsx3
        print("Core components: OK")
        print(f"Google TTS: {'Available' if GTTS_AVAILABLE else 'Not available (pip install gtts pygame)'}")
        
        print("\nStarting Medical Communication System...")
        system = MedicalSystem()
        system.run()
        return 0
    except Exception as e:
        print(f"System error: {e}")
        return 1

if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\nGoodbye!")
        sys.exit(0)