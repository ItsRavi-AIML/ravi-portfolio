import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidEmail,
  getProjectById,
  formatTechList,
  generateMailtoUrl,
  getUniqueToolkitCount,
  sanitizeAnchor,
} from './portfolio';
import { FEATURED_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

test('isValidEmail correctly identifies valid and invalid emails', () => {
  assert.equal(isValidEmail('nimmagaddaravivarma@gmail.com'), true);
  assert.equal(isValidEmail('ravivarma0029@zohomail.in'), true);
  assert.equal(isValidEmail('ravi@vitbhopal.ac.in'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail('test@domain'), false);
});

test('FEATURED_PROJECTS has exactly 5 projects with valid GitHub URLs', () => {
  assert.equal(FEATURED_PROJECTS.length, 5);
  FEATURED_PROJECTS.forEach((project) => {
    assert.ok(project.githubUrl, `Project ${project.id} missing githubUrl`);
    assert.ok(project.githubUrl.startsWith('https://github.com/ItsRavi-AIML/'));
  });
});

test('getProjectById retrieves correct project data for MAYA and EduMind AI', () => {
  const maya = getProjectById('maya');
  assert.ok(maya);
  assert.equal(maya.title, 'MAYA');
  assert.equal(maya.number, '01');
  assert.equal(maya.category, 'AI CALL GATEKEEPER');
  assert.equal(maya.githubUrl, 'https://github.com/ItsRavi-AIML/ai-call-gatekeeper');

  const edumind = getProjectById('edumind-ai');
  assert.ok(edumind);
  assert.equal(edumind.title, 'EduMind AI');
  assert.equal(edumind.number, '05');
  assert.equal(edumind.githubUrl, 'https://github.com/ItsRavi-AIML/Edumind-AI');

  // Verify NEXUS was completely replaced
  const nexus = getProjectById('nexus');
  assert.equal(nexus, undefined);
});

test('PERSONAL_INFO contains portraitUrl and verified contact channels', () => {
  assert.ok(PERSONAL_INFO.portraitUrl);
  assert.ok(PERSONAL_INFO.portraitUrl.includes('file_0000000097e88207a31d575cbd87c1b0_66af70f6.png'));
  assert.equal(PERSONAL_INFO.primaryEmail, 'nimmagaddaravivarma@gmail.com');
  assert.equal(PERSONAL_INFO.secondaryEmail, 'ravivarma0029@zohomail.in');
  assert.equal(PERSONAL_INFO.githubUrl, 'https://github.com/ItsRavi-AIML');
  assert.equal(PERSONAL_INFO.linkedinUrl, 'https://www.linkedin.com/in/raja-ravi-varma-n/');
});

test('formatTechList joins tech stack with subtle dot separator', () => {
  const tech = ['Python', 'FastAPI', 'Whisper STT'];
  assert.equal(formatTechList(tech), 'Python · FastAPI · Whisper STT');
  assert.equal(formatTechList([]), '');
  assert.equal(formatTechList(['React']), 'React');
});

test('generateMailtoUrl builds properly formatted mailto link with unencoded email address', () => {
  const url = generateMailtoUrl('nimmagaddaravivarma@gmail.com', 'Hello Ravi', 'Message text');
  assert.ok(url.startsWith('mailto:nimmagaddaravivarma@gmail.com?'));
  assert.ok(url.includes('subject=Hello%20Ravi'));
  assert.ok(url.includes('body=Message%20text'));

  const defaultUrl = generateMailtoUrl('nimmagaddaravivarma@gmail.com');
  assert.equal(defaultUrl, 'mailto:nimmagaddaravivarma@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Raja%20Ravi%20Varma');
});

test('getUniqueToolkitCount returns positive integer matching curated tools', () => {
  const count = getUniqueToolkitCount();
  assert.ok(count >= 16);
});

test('sanitizeAnchor strips leading hash and whitespace', () => {
  assert.equal(sanitizeAnchor('#work'), 'work');
  assert.equal(sanitizeAnchor('about'), 'about');
  assert.equal(sanitizeAnchor('  #contact  '), 'contact');
});
