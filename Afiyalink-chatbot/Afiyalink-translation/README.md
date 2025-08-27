# AfiyaLink Healthcare Chatbot

A reliable, culturally-sensitive healthcare assistance system built with Python and FastAPI. Provides immediate emergency detection, multi-language support, and Islamic healthcare considerations.

## Features

- **Emergency Detection**: Critical health situations detected in under 5 seconds
- **Multi-Language Support**: English, Arabic, Urdu, and French
- **Cultural Sensitivity**: Special considerations for Islamic healthcare practices
- **AI-Enhanced Responses**: Optional integration with OpenAI, Google Gemini, and Claude
- **99.9% Reliability**: Guaranteed emergency response system
- **Cost-Optimized**: Built-in AI usage cost controls

## Quick Start

### Prerequisites

- Python 3.8 or higher
- pip package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/AfiyaLink.git
   cd AfiyaLink
   ```

2. **Install dependencies**
   ```bash
   pip install fastapi uvicorn pydantic psutil python-dotenv
   ```

3. **Optional: Install AI model libraries** (for enhanced responses)
   ```bash
   pip install openai google-generativeai anthropic
   pip install spacy nltk googletrans
   python -m spacy download en_core_web_sm
   ```

4. **Set up environment variables** (optional)
   ```bash
   # Create .env file
   OPENAI_API_KEY=your_openai_key_here
   GEMINI_API_KEY=your_gemini_key_here  
   CLAUDE_API_KEY=your_claude_key_here
   DAILY_AI_COST_LIMIT=10.00
   ```

5. **Run the application**
   ```bash
   python main.py
   ```

The system will start at `http://localhost:8000`

### Frontend Setup

1. Open the included `frontend.html` file in your web browser
2. The interface will automatically connect to the backend
3. Start chatting with the healthcare assistant

## System Architecture

```
├── main.py              # Complete single-file implementation
├── frontend.html        # Web interface
├── .env                 # Environment variables (optional)
├── afiyalink.db         # SQLite database (auto-created)
└── afiyalink.log        # Application logs
```

## API Endpoints

### Health Chat
```http
POST /api/v1/health-chat
```

**Request:**
```json
{
  "message": "I have a headache",
  "user_id": "user_123",
  "language": "en",
  "cultural_background": "islamic"
}
```

**Response:**
```json
{
  "response": "Information about headache...",
  "intent": "symptom_check",
  "confidence": 0.85,
  "risk_level": "low",
  "emergency_alert": false,
  "response_time": 1.2,
  "request_id": "req_1234567890"
}
```

### Emergency Help
```http
POST /api/v1/emergency
```
Provides immediate emergency response information.

### System Status
```http
GET /api/v1/system-status
```
Returns system health and performance metrics.

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | OpenAI API key for enhanced responses | None |
| `GEMINI_API_KEY` | Google Gemini API key | None |
| `CLAUDE_API_KEY` | Anthropic Claude API key | None |
| `DAILY_AI_COST_LIMIT` | Maximum daily AI usage cost | 10.00 |

### Language Support

- **English (en)**: Default language
- **Arabic (ar)**: Full RTL support
- **Urdu (ur)**: Islamic cultural context
- **French (fr)**: International support

### Cultural Backgrounds

- **General**: Standard medical advice
- **Islamic/Muslim**: Includes halal considerations, Ramadan guidance, and Islamic medical principles

## Safety Features

### Emergency Detection
The system automatically detects emergency keywords and patterns:
- Chest pain, heart attack, stroke
- Difficulty breathing, choking
- Severe bleeding, unconsciousness
- Suicidal ideation, overdose

### Safety Validation
- All responses are validated for medical safety
- Forbidden advice patterns are blocked
- Appropriate medical disclaimers are included
- Human intervention flags for critical situations

### Response Reliability
- **Level 1**: AI-enhanced responses (if available)
- **Level 2**: Database-driven responses
- **Level 3**: Rule-based fallback (always works)

## Medical Database

The system includes a comprehensive medical knowledge base:

- **Symptoms**: 50+ common symptoms with reliability scores
- **Emergency Protocols**: Immediate action guides
- **Cultural Considerations**: Islamic medical principles
- **Self-Care Advice**: Evidence-based recommendations

## Development

### Running in Development Mode
```bash
python main.py
```
The server runs with auto-reload enabled for development.

### Adding New Symptoms
Edit the `populate_medical_data()` method in the `MedicalDatabase` class to add new medical knowledge.

### Testing Emergency Features
Use the frontend's emergency button or send a message with emergency keywords like "chest pain" or "can't breathe".

## Production Deployment

### Docker (Recommended)
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "main.py"]
```

### System Requirements
- **RAM**: Minimum 512MB, Recommended 1GB+
- **CPU**: 1 core minimum, 2+ cores recommended
- **Storage**: 100MB for application, additional for logs
- **Network**: HTTPS recommended for production

### Environment Setup
```bash
# Production environment variables
export ENVIRONMENT=production
export DAILY_AI_COST_LIMIT=50.00
export DATABASE_PATH=/data/afiyalink.db
```

## Monitoring and Logging

### Log Files
- Application logs: `afiyalink.log`
- Emergency alerts are logged with CRITICAL level
- All user interactions are stored in database

### Health Monitoring
Access system status at `/api/v1/system-status`:
- Memory and CPU usage
- Response times
- Emergency response count
- AI model availability

## Security Considerations

### Data Privacy
- No personal health information is stored permanently
- User IDs are generated client-side
- Chat history can be exported and cleared

### API Security
- Input validation on all endpoints
- Rate limiting for API calls
- CORS configuration for web access

### Medical Compliance
- Always includes medical disclaimers
- Emphasizes professional consultation
- Emergency services contact information

## Troubleshooting

### Common Issues

**Backend not starting:**
```bash
# Check Python version
python --version  # Should be 3.8+

# Install missing dependencies
pip install fastapi uvicorn
```

**Frontend connection issues:**
- Ensure backend is running on port 8000
- Check browser console for errors
- Verify CORS settings for your domain

**Database errors:**
- Delete `afiyalink.db` to reset database
- Check file permissions in application directory

**AI model failures:**
- System works without AI models (rule-based fallback)
- Check API key configuration in .env file
- Verify internet connection for AI services

### Performance Optimization

- Use SSD storage for database
- Enable database connection pooling for high traffic
- Monitor memory usage with included system stats
- Consider caching for frequent queries

