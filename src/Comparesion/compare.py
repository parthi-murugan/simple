import re

def read_file(file_path):
    """Read and return the content of a file."""
    with open(file_path, 'r') as file:
        return file.read()

def tokenize(text):
    """Tokenize text into words (alphanumeric sequences)."""
    return re.findall(r'\b\w+\b', text.lower())

def compare_files(main_file_path, compare_file_path):
    """Compare two files and find missing words in the main file."""
    # Read files
    main_content = read_file(main_file_path)
    compare_content = read_file(compare_file_path)

    # Tokenize content
    main_words = set(tokenize(main_content))
    compare_words = set(tokenize(compare_content))

    # Find missing words
    missing_words = compare_words - main_words

    # Calculate success percentage
    total_words = len(compare_words)
    missing_count = len(missing_words)
    success_percentage = ((total_words - missing_count) / total_words) * 100

    # Output results
    print(f"Success Percentage: {success_percentage:.2f}%")
    print(f"Missing Words: {missing_words}")

if __name__ == "__main__":
    # File paths (update these with your actual file paths)
    main_file_path = "c:\\Users\\Parthi\\Desktop\\Frontend_FW\\Angular\\simple\\src\\app\\app.component.ts"  # Replace with your main file path
    compare_file_path = "c:\\Users\\Parthi\\Desktop\\Frontend_FW\\Angular\\simple\\src\\app\\counter\\counter.component.ts"  # Replace with your compare file path

    # Compare files
    compare_files(main_file_path, compare_file_path)