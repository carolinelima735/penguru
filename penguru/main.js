// Initialize Lucide icons
lucide.createIcons();

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Newsletter form handling
const newsletterForm = document.getElementById('newsletter-form');
const newsletterSuccess = document.querySelector('.newsletter-success');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  // Here you would normally send the email to your backend
  console.log('Submitted email:', email);
  
  // Show success message
  newsletterSuccess.hidden = false;
  e.target.reset();
  
  // Hide success message after 3 seconds
  setTimeout(() => {
    newsletterSuccess.hidden = true;
  }, 3000);
});

// Terminal Component
class Terminal {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      typingSpeed: 60,
      ...options
    };
    
    this.inputElement = element.querySelector('.terminal-input');
    this.cursorElement = element.querySelector('.terminal-cursor');
    this.outputElement = element.querySelector('.terminal-output');
  }
  
  async type(text) {
    this.inputElement.textContent = '';
    this.outputElement.textContent = '';
    this.cursorElement.style.display = 'inline-block';
    
    for (let char of text) {
      this.inputElement.textContent += char;
      await new Promise(resolve => setTimeout(resolve, this.options.typingSpeed));
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    return this;
  }
  
  async showOutput(text) {
    this.outputElement.textContent = text;
    this.cursorElement.style.display = 'none';
    return this;
  }
}

// Commands Section
class CommandsSection {
  constructor() {
    this.activeCategory = 'navigation';
    this.selectedCommand = commands.find(cmd => cmd.category === 'navigation');
    this.terminal = new Terminal(document.querySelector('.terminal'));
    
    this.initializeCategories();
    this.initializeCommandsList();
    this.updateCommandDetails();
  }
  
  initializeCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active category
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update commands list
        this.activeCategory = button.dataset.category;
        this.initializeCommandsList();
        
        // Select first command in category
        const firstCommand = commands.find(cmd => cmd.category === this.activeCategory);
        if (firstCommand) {
          this.selectedCommand = firstCommand;
          this.updateCommandDetails();
        }
      });
    });
  }
  
  initializeCommandsList() {
    const commandsList = document.querySelector('.commands-list-content');
    const filteredCommands = commands.filter(cmd => cmd.category === this.activeCategory);
    
    commandsList.innerHTML = filteredCommands.map(cmd => `
      <button class="command-item ${cmd.name === this.selectedCommand?.name ? 'active' : ''}" data-command="${cmd.name}">
        <div class="command-item-name">${cmd.name}</div>
        <div class="command-item-description">${cmd.description}</div>
      </button>
    `).join('');
    
    // Add click handlers
    commandsList.querySelectorAll('.command-item').forEach(item => {
      item.addEventListener('click', () => {
        const commandName = item.dataset.command;
        this.selectedCommand = commands.find(cmd => cmd.name === commandName);
        this.updateCommandDetails();
        
        // Update active state
        commandsList.querySelectorAll('.command-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }
  
  async updateCommandDetails() {
    const details = document.querySelector('.command-details');
    
    // Update command info
    details.querySelector('h3').innerHTML = `
      <code>${this.selectedCommand.name}</code>
      <span>${this.selectedCommand.description}</span>
    `;
    
    details.querySelector('.command-syntax code').textContent = this.selectedCommand.syntax;
    details.querySelector('.command-example code').textContent = this.selectedCommand.example;
    
    // Update terminal
    await this.terminal.type(this.selectedCommand.example);
    if (this.selectedCommand.output) {
      await this.terminal.showOutput(this.selectedCommand.output);
    }
  }
}

// Initialize Commands Section
document.addEventListener('DOMContentLoaded', () => {
  new CommandsSection();
});